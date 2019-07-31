import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Parameter {
  ref: string;
  name: string;
  description: string;
  required: boolean;
  in: string; // header || body
  type: string;
  schema?: Definition; // definition
  enum?: string[]; // possible values if provided
  value?: string; // value used in the request
}
export interface DefinitionProperty {
  name: string;
  format: string;
  type: string;
  description: string;
  required: boolean;
}
export interface Definition {
  name: string;
  properties: DefinitionProperty[];
}
export interface Response {
  code: number;
  description: string;
  schema: Definition;
}
export interface Method {
  method: string;
  parameters: Parameter[];
  responses: Response[];
  data: any[];
  do(): Observable<any>;
}
export interface Path {
  name: string;
  methods: Method[];
  get: Method;
}

@Injectable({
  providedIn: 'root'
})
export class PostgrestService {
  http: HttpClient;
  // given by user
  url: string;
  auth: string;
  // from API
  host: string;
  basePath: string;
  paths: Path[];
  definitions: Definition[];
  parameters: Parameter[];
  // constructor
  constructor(url: string, auth: string, http: HttpClient) {
    this.http = http;
    this.url = url;
    this.auth = auth;
    this.http.get(url).subscribe((data: any) => {
      this.host = data.host;
      this.basePath = data.basePath;
      // definitions
      this.definitions = [];
      for (const definition in data.definitions) {
        if (data.definitions.hasOwnProperty(definition)) {
          const properties: DefinitionProperty[] = [];
          for (const property in data.definitions[definition].properties) {
            if (
              data.definitions[definition].properties.hasOwnProperty(property)
            ) {
              properties.push({
                name: property,
                format:
                  data.definitions[definition].properties[property].format,
                type: data.definitions[definition].properties[property].type,
                description:
                  data.definitions[definition].properties[property].description,
                required: data.definitions[definition].required.includes(
                  property
                )
              });
            }
          }
          this.definitions.push({
            name: definition,
            properties
          });
        }
      }
      // parameters
      this.parameters = [];
      for (const parameter in data.parameters) {
        if (data.parameters.hasOwnProperty(parameter)) {
          this.parameters.push({
            ref: parameter,
            name: data.parameters[parameter].name,
            description: data.parameters[parameter].namename,
            required: data.parameters[parameter].required,
            in: data.parameters[parameter].in,
            type: data.parameters[parameter].type,
            schema: data.parameters[parameter].schema
              ? this.definitions.find(definition => {
                  return (
                    definition.name ===
                    data.parameters[parameter].schema.$ref.split('/')[2]
                  );
                })
              : null,
            enum: data.parameters[parameter].enum
          });
        }
      }
      // paths
      this.paths = [];
      for (const path in data.paths) {
        if (data.paths.hasOwnProperty(path)) {
          if (path === '/') {
            continue;
          }
          const methods: Method[] = [];
          for (const method in data.paths[path]) {
            if (data.paths[path].hasOwnProperty(method)) {
              const responses: Response[] = [];
              for (const response in data.paths[path][method].responses) {
                if (data.paths[path][method].responses.hasOwnProperty(response)) {
                  responses.push({
                    code: +response,
                    description: data.paths[path][method].responses[response].description,
                    schema: data.paths[path][method].responses[response].schema
                      ? this.definitions.find(definition =>
                        definition.name === data.paths[path][method].responses[response].schema.items.$ref.split('/')[2]
                      )
                      : null,
                  });
                }
              }
              methods.push({
                method,
                responses,
                parameters: data.paths[path][method].parameters
                  ? data.paths[path][method].parameters.map(parameterRef => {
                      return this.parameters.find(parameter => {
                        return (
                          parameter.ref === parameterRef.$ref.split('/')[2]
                        );
                      });
                    })
                  : [],
                data: null,
                do: () => http.get(this.url + path)
              });
            }
          }
          this.paths.push({
            methods,
            name: path.replace('/', ''),
            get: methods.find(i => i.method === 'get')
          });
        }
      }
    });
  }
}
