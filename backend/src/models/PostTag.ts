import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Tag } from "./Tag";
import { Post } from "./Post";


@Table 
export class PostTag extends Model<PostTag>{

    @ForeignKey(()=>Post)
    @Column({
        allowNull: false
    })
    PostId?: number

    @ForeignKey(()=>Tag)
    @Column
    TagId?: number
}