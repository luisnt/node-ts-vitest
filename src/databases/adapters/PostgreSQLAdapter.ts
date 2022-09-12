import pgp from "pg-promise"
import ConnectionAdapters from "../../contracts/databases/ConnectionAdapters"

const DEFAULT_PARAMETERS: string =
  "postgres://postgres:postgres@192.168.0.1:5432/postgres"

export default class PostgreSQLAdapter implements ConnectionAdapters {
  private connection: any

  constructor(parameters: string = DEFAULT_PARAMETERS) {
    this.connection = pgp()(parameters)
  }

  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params)
  }

  one(statement: string, params: any): Promise<any> {
    return this.connection.one(statement, params)
  }
  close(): Promise<void> {
    return this.connection.$pool.end()
  }
}
