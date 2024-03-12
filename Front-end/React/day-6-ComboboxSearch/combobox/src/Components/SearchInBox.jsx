import  { useState } from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { useForm } from 'react-hook-form';
import { Popover, PopoverContent, PopoverTrigger } from '@reach/popover';
import { Button } from '@reach/button';
import { useCombobox } from 'downshift';

// Define the available languages
const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Spanish', value: 'es' },
    { label: 'Portuguese', value: 'pt' },
    { label: 'Russian', value: 'ru' },
    { label: 'Japanese', value: 'ja' },
    { label: 'Korean', value: 'ko' },
    { label: 'Chinese', value: 'zh' },
];

// Main component
export const SearchInBox=()=> {
    // Initialize the form
    const form = useForm();

    // Define the state for the selected language
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    // Define the function to handle form submission
    function onSubmit(data) {
        // Display the submitted values
        console.log('Submitted data:', data);
    }

    // Define the function to handle language selection
    function handleLanguageSelection(language) {
        // Set the selected language
        setSelectedLanguage(language);
        // Set the form value
        form.setValue('language', language.value);
    }

    // Define the Downshift combobox
    const {
        isOpen,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        getItemProps,
        highlightedIndex,
    } = useCombobox({
        items: languages,
        onSelectedItemChange: ({ selectedItem }) => handleLanguageSelection(selectedItem),
    });

    // Render the component
    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div {...getComboboxProps()} className="flex flex-col">
                <label htmlFor="language">Language</label>
                <Popover>
                    <PopoverTrigger asChild>
                        <div>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-haspopup="listbox"
                                aria-expanded={isOpen}
                                {...getInputProps()}
                            >
                                {selectedLanguage ? selectedLanguage.label : 'Select language'}
                                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0" {...getMenuProps()}>
                        {isOpen && (
                            <ul>
                                {languages.map((language, index) => (
                                    <li
                                        key={language.value}
                                        {...getItemProps({
                                            item: language,
                                            index,
                                            style: {
                                                backgroundColor: highlightedIndex === index ? '#e2e8f0' : 'white',
                                                fontWeight: selectedLanguage === language ? 'bold' : 'normal',
                                            },
                                        })}
                                    >
                                        {language.label}
                                        {selectedLanguage === language && (
                                            <CheckIcon className="ml-auto h-4 w-4 opacity-100" />
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </PopoverContent>
                </Popover>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}
