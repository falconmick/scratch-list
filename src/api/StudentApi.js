import axios from 'axios';

const _axios = axios.create({
  baseURL: 'https://api.scratch.mit.edu/users/',
  timeout: 3000,
});

export default class StudentApi {
  static getStudentProjects(username) {
    return _axios.get(`${username}/projects`);
  }
}
