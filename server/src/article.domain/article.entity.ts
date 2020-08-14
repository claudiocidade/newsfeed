import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ArticleEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    headline: string;

    @Column()
    postText: string;

    @Column()
    postedDate: string;
}