import { UserAuth } from './UserAuth'

export type PasswordlessLoginFinishResponse = UserAuth & {
    redirect_url: string;
    public_id: string;
}