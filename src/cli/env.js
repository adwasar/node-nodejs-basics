const parseEnv = () => {
  const envVariables = Object.keys(process.env)
    .filter((key) => key.startsWith('RSS_'))
    .map((key) => `${key}=${process.env[key]}`)

  console.log(envVariables.join('; '))
}

parseEnv()
