import { Request } from 'express';

export interface RequestWithJwt extends Request {
    jwt?: { [key: string]: any };
  }

// Type for custom error

export interface CustomError extends Error {
    status?: number;
}

// user interface 

export interface IUser {
    name: string;
    email: string;
    phone: string;
    rut: string;
    password: string;
    status?: boolean;
    recoverPasswordToken?: string;
    isConfirmed?: boolean;
    info: Object;
}

// authorization interface

export interface AuthData {
    email: string,
    password: string,
}

// Post 

export interface Location{
    x: string,
    y: string
}

export interface Post{
    userId: string,
    publish_date: number, // unixtimestamp
    status: boolean,
    location: Location,
    content: Content
}

export interface Content {
    text: string;
    data?: File[];
}

export interface File{
    filePath: string,
}
