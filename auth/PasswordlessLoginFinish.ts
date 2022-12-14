import { UserAuth } from './UserAuth'

export type PasswordlessLoginFinish = UserAuth & {
    redirect_url: string;
    public_id: string;
}