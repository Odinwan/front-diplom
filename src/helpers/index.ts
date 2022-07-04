import { EducType, Gender, UserType } from "../services/AuthService/AccountInfoService";
import images from '../../assets/images';

export function getAge(dateString:string|null) {

  if (!dateString) {
    return null
  }

  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
  {
    age--;
  }
  return age;
}

export function getUserType(type: UserType) {

  if (type === 'student') {
    return 'Студент'
  }

  if (type === 'teacher') {
    return 'Преподаватель'
  }

  return 'user'
}

export function getGender(type: Gender) {

  if (type === 'male') {
    return 'м'
  }

  if (type === 'female') {
    return 'ж'
  }

  return '-'
}

export function getGenderImage(type: Gender) {

  if (type === 'male') {
    return images.ManIcon
  }

  if (type === 'female') {
    return  images.GirlIcon
  }

  return  images.GirlIcon
}

export function getEducationType(type: EducType) {

  if (type === 'full_time') {
    return 'очная'
  }

  if (type === 'part_time') {
    return 'заочная'
  }

  return '-'
}
