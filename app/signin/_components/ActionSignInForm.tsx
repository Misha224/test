import { Button } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { PasswordInput } from '@/ui/password-input';

import { signInAction } from './signInAction';

export const ActionSignInForm = () => {
  let error: unknown;

  return (
    <form
      action={async (formData) => {
        'use server';
        const res = await signInAction(formData);
      }}
      className='flex flex-col items-center gap-10 font-inter'
    >
      <div className=''>
        <Label htmlFor='email'>Email</Label>
        <Input
          autoComplete='email'
          name='email'
          type='email'
          id='email'
          placeholder='example@example.com'
<<<<<<< HEAD
          className='w-[300px]'
=======
<<<<<<< HEAD
          className='w-[300px]'
=======
          className='w-[320px]'
>>>>>>> e036c06ba22b01d8b355680d2a2a268f1e4b99a5
>>>>>>> bcd9649d9b79e69a8623dc7828491f8321b125f8
        />
      </div>

      <div className=''>
        <Label htmlFor='password'>Password</Label>
        <PasswordInput
          name='password'
          type='password'
          id='password'
          placeholder='password'
<<<<<<< HEAD
          className='w-[300px]'
=======
<<<<<<< HEAD
          className='w-[300px]'
=======
          className='w-[320px]'
>>>>>>> e036c06ba22b01d8b355680d2a2a268f1e4b99a5
>>>>>>> bcd9649d9b79e69a8623dc7828491f8321b125f8
        />
      </div>

      <Button type='submit'>Войти</Button>
    </form>
  );
};
