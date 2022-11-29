import axios from "axios";

// project api's

const url_project = "http://localhost:5000/projects";

export const fetchProjects = (ownerName) =>
  axios.get(`${url_project}/${ownerName}`);
export const createProject = (newProject) =>
  axios.post(`${url_project}`, newProject);

export const fetchProject = (projectName) =>
  axios.get(`${url_project}/view/${projectName}`);
export const updateProject = (id, updatedProject) =>
  axios.patch(`${url_project}/${id}`, updatedProject);
export const deleteProject = (id) => axios.delete(`${url_project}/${id}`);

const url_auth = "http://localhost:5000/users";

export const fetchUsers = () => axios.get(url_auth);
export const createUser = (newUser) =>
  axios.post(`${url_auth}/register`, newUser);
export const login = (user) => axios.post(`${url_auth}/login`, user);
export const fetchUser = (id) => axios.get(`${url_auth}/${id}`);
export const updateUser = (id, updatedUser) =>
  axios.patch(`${url_auth}/${id}`, updatedUser);
export const deleteUser = (id) => axios.delete(`${url_auth}/${id}`);

const design__file__auth = "http://localhost:5000/designFile";

export const fetchDesignFiles = (name) =>
  axios.get(design__file__auth, {
    params: {
      ownerName: name,
    },
  });
export const fetchProjectDesignFiles = (name, projectName) =>
  axios.get(design__file__auth, {
    params: {
      ownerName: name,
      projectName,
    },
  });
export const createDesign_File = (designFile) =>
  axios.post(`${design__file__auth}/create`, designFile);

export const fetchDesignFile = (id) => axios.get(`${design__file__auth}/${id}`);
export const updateDesignFile = (id, updatedDesignFile) =>
  axios.patch(`${design__file__auth}/${id}`, updatedDesignFile);
export const deleteDesignFile = (id) =>
  axios.delete(`${design__file__auth}/${id}`);

const activity__log = "http://localhost:5000/activityLog";
export const fetchActivityLogs = () => axios.get(activity__log);

const chat = "http://localhost:5000/chat";
export const fetchChats = (room) => axios.get(chat, room);
export const createChat = (chat1) => axios.post(`${chat}/chatSave`, chat1);

//NOTIFICATION
const notification = "http://localhost:5000/notification";
// export const fetchNotifications = (room) => axios.get(notification, room);
export const createNotification = (data) =>
  axios.post(`${notification}/`, data);
export const fetchNotifications = (receiver) =>
  axios.get(`${notification}/notify/${receiver}`);
export const acceptNotification = (data1) =>
  axios.post(`${notification}/accept`, data1);

// VERSION
const version = "http://localhost:5000/versions";
export const fetchVersions = (designFile) =>
  axios.get(`${version}/${designFile} `);
export const createVersion = (versionFile) => axios.post(version, versionFile);
