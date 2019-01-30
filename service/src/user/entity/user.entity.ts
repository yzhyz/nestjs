import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    login_name: string;
}