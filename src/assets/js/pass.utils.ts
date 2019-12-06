import * as bcrypt from 'bcryptjs';

export async function hashPassword( password ): Promise<string> {

    let hashedPassword: Promise<string> = new Promise(resolve => {
        if(password !== null) {
            bcrypt.genSalt(10, (err, salt) => {
                if(err) return null;
                bcrypt.hash(password, salt, (err, hash) => {
                    if(err) return null;
                    resolve(hash);
                });
            });
        }
    });
    return hashedPassword;
}
