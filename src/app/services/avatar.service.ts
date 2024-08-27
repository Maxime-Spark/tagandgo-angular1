import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { AvatarModel } from '../models/avatar.model';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  [x: string]: any;

  private API_URL_BASE: string = "http://localhost:7069";

  constructor(private http: HttpClient) { }

  public async getAllAvatars(): Promise<Array<AvatarModel>> {
    const url: string = `${this.API_URL_BASE}/Avatar`;

    try {
      const respons: any = await firstValueFrom(this.http.get(url, { responseType: 'json' }));

      return respons as Array<AvatarModel>

    } catch (error) {
      throw error;
    }
  }

  public async createAvatar(): Promise<void>  {
    try {

    } catch (error) {
      throw error;
    }
  }

  public async updateAvatar(): Promise<void>  {
    try {

    } catch (error) {
      throw error;
    }
  }

  public async deleteAvatar(): Promise<void>  {
    try {

    } catch (error) {
      throw error;
    }
  }
}
