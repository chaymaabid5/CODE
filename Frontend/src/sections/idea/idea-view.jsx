import { useState } from 'react';

import axiosInstance from 'src/utils/axiosInstance'; 
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { bgGradient } from 'src/theme/css';

import Logo from 'src/components/logo';
import Iconify from 'src/components/iconify';

export default function IdeaView() {
  const theme = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({
    ideaName: '',
    briefDescription: '',
    problem1: '',
    problem2: '',
    problem3: '',
    solution1: '',
    solution2: '',
    solution3: '',
    valueProposition: '',
    competitiveAdvantage: '',
    customerSegments: '',
    alternativeOffers: '',
    communicationChannels: '',
  });
  const [businessPlan, setBusinessPlan] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send form data to backend endpoint using Axios
      const response = await axiosInstance.post('/ai/idea', { formResponses: Object.values(formData) });
      // Handle successful response from backend
      console.log('Business plan generated:', response.data);
      setBusinessPlan(response.data); // Set the generated business plan in state
      setError(null); // Clear any previous error
    } catch (err) {
      // Handle errors
      console.error('Error generating business plan:', err);
      setError('Error generating business plan. Please try again.'); // Set error message in state
    }
  };

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Idea Submission Form</Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Idea's name"
                name="ideaName"
                value={formData.ideaName}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Brief Description"
                name="briefDescription"
                value={formData.briefDescription}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Three main problems you want to solve"
                name="problem1"
                value={formData.problem1}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Three main solutions to the identified problems"
                name="solution1"
                value={formData.solution1}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Value proposition"
                name="valueProposition"
                value={formData.valueProposition}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Competitive advantage"
                name="competitiveAdvantage"
                value={formData.competitiveAdvantage}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Customer segments"
                name="customerSegments"
                value={formData.customerSegments}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Alternative offers"
                name="alternativeOffers"
                value={formData.alternativeOffers}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Communication channels"
                name="communicationChannels"
                value={formData.communicationChannels}
                onChange={handleChange}
                required
              />
              <Button type="submit" variant="contained" size="large">
                Generate Business Plan!
              </Button>
            </Stack>
          </form>
          {businessPlan && (
            <Card>
              <Typography variant="h5">Generated Business Plan:</Typography>
              <Typography>{businessPlan}</Typography>
            </Card>
          )}
          {error && (
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          )}
        </Card>
      </Stack>
    </Box>
  );
}
