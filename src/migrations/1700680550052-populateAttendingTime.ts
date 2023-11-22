import { MigrationInterface, QueryRunner } from "typeorm";

export class populateAttendingTime1700680550052 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE clinic_doctors SET avg_attending_time = '00:10:00'`); 
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`UPDATE clinic_doctors SET avg_attending_time = NULL`); 
    }

}
