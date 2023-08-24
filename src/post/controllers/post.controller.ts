import { Request, Response, NextFunction } from "express";
import PostModel from "../models/post.model";
import { Post } from "../../shared/types/types";

export const list = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await PostModel.list();
    res.status(200).send(response);
  } catch (error) {
    next(error)
  }
}

export const listByUserId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId: string = req.params.userId;
    const postUserId: Pick<Post, 'userId'> = { userId };

    const response = await PostModel.listByUserId(postUserId);
    res.status(200).send(response);
  } catch (error) {
    next(error)
  }
}

export const insert = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.body.userId;
    const content = req.body.content;
    const location = req.body.location;

    const post = {
      userId: userId,
      publish_date: 1,
      status: true,
      content: content,
      location: location,
    };

    const response = await PostModel.insert(post);
    res.status(201).send(response);
  } catch (error) {
    next(error)
  }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postId: string = req.params.creatorId;
    const postDataToUpdate = req.body;
    const response = await PostModel.update(postId, postDataToUpdate);
    res.status(200).send(response);
  } catch (error) {
    next(error)
  }
}
2
export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postId: string = req.params.id;
    const response = await PostModel.delete(postId);
    res.status(200).send(response);
  } catch (error) {
    next(error)
  }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postId: string = req.params.id;
    const response = await PostModel.getById(postId);
    res.status(200).send(response);
  } catch (error) {
    next(error)
  }
}