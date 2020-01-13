import * as bcrypt from 'bcryptjs';

// Funcion que crea el hash de la contrasenna
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
// Comprueba si el hash coincide con la contrasenna
export async function comparePassword( password, hash): Promise<boolean> {
    let isPasswordCorrect: Promise<boolean> = new Promise( resolve => {
        bcrypt.compare(password, hash).then(res => {
            console.log('res de compare:', res);
            resolve(res);
        });
    });
    return isPasswordCorrect;
}
