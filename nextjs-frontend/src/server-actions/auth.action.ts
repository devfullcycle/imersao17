'use server';

import { redirect } from "next/navigation";
import { AuthService } from "../services/auth.service";


export async function loginAction(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const redirect_to = formData.get('redirect_to') as string;

    const authService = new AuthService();
    const error = await authService.login({ email, password });

    if(error){
        return error;
    }

    redirect(redirect_to || '/products');
}

export async function logoutAction() {
    const authService = new AuthService();
    authService.logout();
    redirect('/login');
}