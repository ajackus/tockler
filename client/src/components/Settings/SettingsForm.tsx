import React from 'react';
import { AnalyserForm } from './AnalyserForm';
import { AppForm } from './AppForm';
import { WorkForm } from './WorkForm';
import { VStack } from '@chakra-ui/react';

export const SettingsForm = () => {
    return (
        <VStack spacing={4} p={4} alignItems="flex-start">
            <WorkForm />

            <AppForm />

            <AnalyserForm />
        </VStack>
    );
};
