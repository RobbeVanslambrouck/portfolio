import { writable } from 'svelte/store';

export const inview = writable([]);

export const addInview = (element) => {
  inview.update(($inview) => {
    $inview = [...$inview, element];
    return $inview;
  });
};

export const removeInview = (element) => {
  inview.update(($inview) => {
    $inview = $inview.filter((e) => e !== element);
    return $inview;
  });
};

const storedTheme = localStorage.getItem('theme');
export const theme = writable(storedTheme);
theme.subscribe((value) => {
  localStorage.setItem('theme', value === 'dark' ? 'dark' : 'light');
});
