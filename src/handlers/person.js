// src
import { Person } from '../types'
import { PersonModel } from '../models/Person'

export function createOrUpdatePerson(person: Person) {
  const { name, email } = person

  return PersonModel.findOneAndUpdate({ name, email }, person, {
    upsert: true,
    useFindAndModify: false,
    new: true,
  })
}
