import { UserProfile } from "./spotify-interfaces";

export interface IAuthState {
	isAuthenticated: boolean;
	accessToken: string;
	userInfo: UserProfile | null;
}
