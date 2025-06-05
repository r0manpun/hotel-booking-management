import { useMutation } from '@tanstack/react-query';
import { signUp as signUpApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignup() {
  const { mutate: signUp, isPending: isSigning } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account form the user's email address."
      );
    },
    onError: (error) => {
      toast.error(error.message || 'Signup failed');
    },
  });

  return {
    signUp,
    isSigning,
  };
}
