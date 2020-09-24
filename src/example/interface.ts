interface NameInfo {
  firstname: string,
  lastname: string
}

const getFullName = ({firstname, lastname}: NameInfo): string => {
  return `${firstname} ${lastname}`
}
