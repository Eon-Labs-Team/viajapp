import { Schema, model } from 'mongoose';
import { Post } from '../../shared/types/types';

class PostModel {
  postSchema: Schema<Post> | undefined;
  PostModel: any;

  constructor() {
    this.defineMongooseSchema();
    this.createMongooseModel();
  }

  private defineMongooseSchema(){
    this.postSchema = new Schema<Post>({
      userId: { type: String, required: true },
      publish_date: { type: Number },
      status: { type: Boolean, required: true },
      location: { type: Object, required: true },
      content: { type: Object }
    });
    this.postSchema.index({ creatorId: 1 });
  }

  private createMongooseModel(){
    this.PostModel = model<Post>('Post', this.postSchema);
  }

  public async list() {
    const posts = await this.PostModel.find({});
    return posts;
  }

  public async listByUserId(userId: Pick<Post, 'userId'>) {
    const posts = await this.PostModel.find(userId);
    return posts;
  }

  public async insert(postData: Post) {
    const newPost = new this.PostModel(postData);
    const savedPost = await newPost.save();
    return savedPost;
  }

  public async update(id: string, dataToUpdate: Post) {
    const updatedPost = await this.PostModel.findByIdAndUpdate(id, dataToUpdate, { new: true });
    return updatedPost;
  }

  public async delete(id: string) {
    const deletedPost = await this.PostModel.findByIdAndDelete(id);
    return deletedPost;
  }

  public async getById(id: string) {
    const post = await this.PostModel.findById(id);
    return post;
  }
}

const postModel = new PostModel();
export default postModel;