import { MigrationInterface, QueryRunner } from 'typeorm';
export class AddColToArticleTable1586666091775 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    queryRunner.query(`ALTER TABLE article ADD author VARCHAR(30)`);
  }
  public async down(queryRunner: QueryRunner): Promise<any> {
    queryRunner.dropColumn('article', 'author');
  }
}