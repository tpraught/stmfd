import axios from "axios";

export default {
  getRoster: function() {
    return axios.get("/api/admin/roster");
  },
  getFrontEndRoster: function() {
    return axios.get("/api/roster");
  },
  deleteRecord: function(id) {
    return axios.delete("/api/admin/roster/" + id);
  },
   saveRecord: function(recordData) {
    return axios.post("/api/admin/add", recordData);
  },
  editRecord: function(recordData) {
    return axios.put("/api/admin/roster", recordData);
  },
  saveExplorerEvent: function(eventData) {
    return axios.post("/api/admin/explorerform", eventData);
  },
  getExplorerEvents: function() {
    return axios.get("/api/admin/explorerschedule");
  },
  deleteExplorerEvent: function(id) {
    return axios.delete("/api/admin/explorerschedule/" + id);
  },
  getExplorerFrontEndSchedule: function() {
    return axios.get("/api/ExplorerSchedule");
  },
  saveTrainingEvent: function(eventData) {
    return axios.post("/api/admin/trainingform", eventData);
  },
  getEventsSchedule: function() {
    return axios.get("/api/admin/trainingschedule");
  },
  deleteTrainingEvent: function(id) {
    return axios.delete("/api/admin/trainingschedule/" + id);
  },
  getFrontEndSchedule: function() {
    return axios.get("/api/Schedule");
  },
  saveUser: function(eventData) {
    return axios.post("/api/account/register", eventData);
  }
};
