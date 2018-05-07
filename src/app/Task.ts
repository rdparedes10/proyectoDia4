export class Task {
    id: number;
    state: string;
    description:string;
  }
  
  export var TASK = [
    {
      "id": 0,
      "state": "activa",
      "description": "Trotar en la mañana",
    }
  ];

  export enum STATES {
                        ACTIVO = "activo",
                        COMPLETADO = "completado"
                    };