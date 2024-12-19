import bcrypt from 'bcrypt';

export async function hashPassword(password) {
    try {
        const saltRounds = 10;
        const hashedPass = await bcrypt.hash(password, saltRounds);
        console.log(`Hashed password : ${hashedPass}`);
        return hashedPass;
    } catch (error) {
        console.error(error.message);
    }
}