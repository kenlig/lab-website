import axios from "axios";

class Api {
  constructor() {
    this.base = "http://localhost:8000";
    this.r = axios.create({
      // baseURL: "/api",
      baseURL: this.base,
      // withCredentials: true,
    });
    this.conf = {
      headers: { Authorization: "" },
    };
  }

  lookup = async (id) => {
    const rs = await this.r.get(`/certificate/${id}`);
    return rs.data;
  };

  login = async (id, password) => {
    const rs = await this.r.post("/user/login", { id, password });
    return rs.data;
  };

  getUserInfo = async () => {
    const rs = await this.r.get("/user", this.conf);
    return rs.data;
  };

  getCerts = async () => {
    const rs = await this.r.get("/certificate", this.conf);
    return rs.data;
  };

  getCertImage = async (id) => {
    const rs = await this.r.get(`/certificate/img/${id}`, {
      responseType: "blob",
      ...this.conf,
    });
    return rs.data;
  };

  adminLogin = async (password) => {
    const rs = await this.r.post("/admin/login", { id: "admin", password });
    return rs.data;
  };

  searchUser = async (content) => {
    const rs = await this.r.get(`/user/query/${content}`, this.conf);
    return rs.data;
  };

  getAllUsers = async () => {
    const rs = await this.r.get("/user/all", this.conf);
    return rs.data;
  };

  // untested apis
  getTemplates = async () => {
    const rs = await this.r.get("/certificate/templates", this.conf);
    return rs.data;
  };

  grantCert = async (id, templateId) => {
    const rs = await this.r.post(
      "/certificate/grant",
      { id, templateId },
      this.conf
    );
    return rs.data;
  };
}

export default new Api();
