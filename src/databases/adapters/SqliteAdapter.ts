import SQLite from "better-sqlite3"
import ConnectionAdapters from "../../contracts/databases/ConnectionAdapters"

export default class SQLiteAdapter implements ConnectionAdapters {
  private connection: any

  constructor() {
    this.connection = new SQLite("")
  }

  query(statement: string, params: any): Promise<any> {
    return this.connection.prepare(statement).all(params)
  }

  one(statement: string, params: any): Promise<any> {
    return this.connection.prepare(statement).one(params)
  }
  close(): Promise<void> {
    return this.connection.close()
  }
}
