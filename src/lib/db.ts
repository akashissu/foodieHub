type DatabaseProvider = 'memory' | 'mongodb' | 'postgres';

export type DatabaseConnection = {
  provider: DatabaseProvider;
  uri?: string;
};

export async function connectDatabase(): Promise<DatabaseConnection> {
  const mongoUri = process.env.MONGODB_URI;
  const postgresUri = process.env.POSTGRES_URL;

  if (mongoUri) {
    return { provider: 'mongodb', uri: mongoUri };
  }

  if (postgresUri) {
    return { provider: 'postgres', uri: postgresUri };
  }

  return { provider: 'memory' };
}
