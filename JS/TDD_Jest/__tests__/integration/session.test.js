
describe('Authentication', () => {
    it('should create a user on database', () => {
      const user = await User.create({
        name: "Carlos",
        email: "carlos@teste.com",
        password_hash: "123456"
      });

      console.log(user);

      expect(user.email).toBe('carlos@teste.com');
    });
});
