import { writable } from 'svelte/store';

export const inView = writable([]);

export const addInView = (element) => {
  inView.update(($inView) => {
    $inView = [...$inView, element];
    return $inView;
  });
};

export const removeInView = (element) => {
  inView.update(($inView) => {
    $inView = $inView.filter((e) => e !== element);
    return $inView;
  });
};

const storedTheme = localStorage.getItem('theme');
export const theme = writable(storedTheme);
theme.subscribe((value) => {
  localStorage.setItem('theme', value === 'dark' ? 'dark' : 'light');
});
