'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

import { createUser } from '@/api/users';
import { signUpSchema } from '@/lib/zod/authSchema';
import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { PasswordInput } from '@/ui/password-input';

export const SignUpForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      name: ''
    },
    mode: 'onBlur'
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    const res = await createUser(values);
    if (res.ok) {
      router.push('/signin');
    } else {
      form.setError('email', { message: res.error });
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col items-center gap-10 font-inter'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
<<<<<<< HEAD
                <Input {...field} className='w-[300px]' autoComplete='name' />
=======
<<<<<<< HEAD
                <Input {...field} className='w-[300px]' autoComplete='name' />
=======
                <Input {...field} className='w-[320px]' autoComplete='name' />
>>>>>>> e036c06ba22b01d8b355680d2a2a268f1e4b99a5
>>>>>>> bcd9649d9b79e69a8623dc7828491f8321b125f8
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='example@example.com'
                  autoComplete='email'
                  {...field}
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
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
<<<<<<< HEAD
                <PasswordInput placeholder='***' {...field} className='w-[300px]' />
=======
<<<<<<< HEAD
                <PasswordInput placeholder='***' {...field} className='w-[300px]' />
=======
                <PasswordInput placeholder='***' {...field} className='w-[320px]' />
>>>>>>> e036c06ba22b01d8b355680d2a2a268f1e4b99a5
>>>>>>> bcd9649d9b79e69a8623dc7828491f8321b125f8
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Зарегестрироваться</Button>
      </form>
    </Form>
  );
};
