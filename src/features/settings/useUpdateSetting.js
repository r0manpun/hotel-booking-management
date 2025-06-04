import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSetting as updateSettingApi } from '../../services/apiSettings';
import toast from 'react-hot-toast';

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Setting updated successfully');
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
    onError: () => {
      toast.error('Failed to update setting');
    },
  });

  return { updateSetting, isUpdating };
}
