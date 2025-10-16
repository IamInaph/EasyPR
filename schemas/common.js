import * as z from "zod"

export const requiredValidation = (fieldName = "Field") =>
  z.string().min(1, `${fieldName} is required`)
