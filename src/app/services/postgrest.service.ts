import { Injectable } from '@angular/core';

interface Parameter {
  ref: string;
  name: string;
  description: string;
  required: boolean;
  in: string; // header || body
  type: string;
  schema?: Definition; // definition
  enum?: string[]; // possible values if provided
}
interface DefinitionProperty {
  name: string;
  format: string;
  type: string;
  description: string;
  required: boolean;
}
interface Definition {
  name: string;
  properties: DefinitionProperty[];
}
interface Response {
  code: number;
  description: string;
}
interface Method {
  method: string;
  parameters: Parameter[];
  responses: Response[];
}
interface Path {
  name: string;
  methods: Method[];
}

@Injectable({
  providedIn: 'root'
})
export class PostgrestService {
  host: string;
  basePath: string;
  paths: Path[];
  definitions: Definition[];
  parameters: Parameter[];
  constructor(data: any) {
    this.host = data.host;
    this.basePath = data.basePath;
    // definitions
    this.definitions = [];
    for (const definition in data.definitions) {
      if (data.definitions.hasOwnProperty(definition)) {
        const properties: DefinitionProperty[] = [];
        for (const property in data.definitions[definition].properties) {
          if (data.definitions[definition].properties.hasOwnProperty(property)) {
            properties.push({
              name: property,
              format: data.definitions[definition].properties[property].format,
              type: data.definitions[definition].properties[property].type,
              description: data.definitions[definition].properties[property].description,
              required: data.definitions[definition].required.includes(property)
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
          schema: data.parameters[parameter].schema ? this.definitions.find(definition => {
            return definition.name === data.parameters[parameter].schema.$ref.split('/')[2];
          }) : null,
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
            methods.push({
              method,
              parameters: data.paths[path][method].parameters ? data.paths[path][method].parameters.map(parameterRef => {
                return this.parameters.find(parameter => {
                  return parameter.ref === parameterRef.$ref.split('/')[2];
                });
              }) : [],
              responses: [] // todo
            });
          }
        }
        this.paths.push({
          name: path.replace('/', ''),
          methods
        });
      }
    }
  }

}

