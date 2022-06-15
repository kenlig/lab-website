import axios from "axios";

class Api {
  constructor() {
    // this.base = "http://localhost:8000";
    this.base = "http://192.168.233.156:8000/api";
    this.r = axios.create({
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
    // only one admin account
    const rs = await this.r.post("/user/login", { id: "admin", password });
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

  getTemplates = async () => {
    const rs = await this.r.get("/certificate/templates", this.conf);
    return rs.data;
  };

  grantCert = async (id, templateId, description) => {
    const rs = await this.r.post(
      "/certificate/grant",
      {
        template_id: templateId,
        grantee_id: id,
        description,
      },
      this.conf
    );
    return rs.data;
  };

  register = async (id, name, password) => {
    const rs = await this.r.post("/user/reg", { id, name, password });
    return rs.data;
  };

  getUserCerts = async (id) => {
    const rs = await this.r.get(`/certificate/user/${id}`, this.conf);
    return rs.data;
  };
}

export default new Api();
