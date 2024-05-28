import { User } from "./schemas/user";
import { Event } from "./event";
import axios from "axios";

class ApiService {
  private static instance: ApiService;
  private users: User[];
  public onUsersUpdated: Event<User[]>;

  constructor() {
    this.onUsersUpdated = new Event<User[]>();
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }
}

export const apiService = ApiService.getInstance();
