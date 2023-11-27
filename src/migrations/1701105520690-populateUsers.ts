import { MigrationInterface, QueryRunner } from "typeorm";

export class populateUsers1701105520690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'luizacorreiarodrigues@gmail.com', 'Luiza', 'Correia Rodrigues', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'aliceoliveiracunha@gmail.com', 'Alice', 'Oliveira Cunha', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'viniciusribeiroalmeida@gmail.com', 'Vinicius', 'Ribeiro Almeida', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'otaviocorreiasilva@gmail.com', 'Otávio', 'Correia Silva', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'tiagobarroscastro@gmail.com', 'Tiago', 'Barros Castro', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'luisfernandesalves@gmail.com', 'Luís', 'Fernandes Alves', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'fernandagoncalvesaraujo@gmail.com', 'Fernanda', 'Goncalves Araujo', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'carolinapereirasilva@gmail.com', 'Carolina', 'Pereira Silva', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'liviacastrobarros@gmail.com', 'Livia', 'Castro Barros', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

        await queryRunner.query(`
        INSERT INTO users (id, email, first_name, last_name, password, active, created_at, updated_at)
        VALUES (uuid_generate_v4(), 'viniciusmartinsbarros@gmail.com', 'Vinícius', 'Martins Barros', '$2b$12$1NBj1pdfjfTz5OJ9BSXvZ.yau7sM29klYqmrj8tkcdZfIbG0IPbSu', true, NOW(), NOW())
        `);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM users`);
    }

}
