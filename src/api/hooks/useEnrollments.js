import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import * as enrollmentApi from '../enrollment_api';

const KEY = 'enrollments';

export function useMyEnrollments() {
  return useQuery({
    queryKey: [KEY],
    queryFn: enrollmentApi.getMyEnrollments,
    select: (data) => data.enrollments ?? [],
  });
}

export function useEnrollCourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: enrollmentApi.enrollCourse,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [KEY] }),
  });
}

export function useUnenrollCourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: enrollmentApi.unenrollCourse,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [KEY] }),
  });
}
