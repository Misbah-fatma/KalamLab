import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../SideBar';
import {
    TextField,
    Button,
    Typography,
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,

} from '@mui/material';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');
    const axiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      });
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const response = await axiosInstance.post('/posts/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setMessage('Post created successfully!');
        } catch (err) {
            setMessage('Error creating post.');
        }
    };

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosInstance.get('/posts/details'); 
                setPosts(response.data.posts);
            } catch (err) {
                console.error('Error fetching posts:', err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
          <Sidebar />
          <div className="col mt-4">
          <div className="row">
              <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="">Meta Data</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Create</li>
                  </ol>
                </nav>
              </div>
              <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="main-card card d-flex h-100 flex-column">
                    <div className="card-body">
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Title"
                            variant="outlined"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            component="label"
                            
                        >
                            Upload Image
                            <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                            />
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
            {message && (
                <Typography
                    variant="body1"
                    color="success.main"
                    sx={{ mt: 2 }}
                >
                    {message}
                </Typography>
            )}
       
        </div>
        </div>
        </div>
        </div>

        <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                  <div className="main-card card d-flex h-100 flex-column">
                    <div className="card-body">
                    <TableContainer
            component={Paper}
            sx={{
                maxWidth: '100%',
                margin: 'auto',
                mt: 4,
                boxShadow: 3,
                borderRadius: 2,
            }}
        >
            <Typography
                variant="h6"
                sx={{ padding: 2, backgroundColor: '#f5f5f5' }}
            >
                Posts Table
            </Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><strong>Title</strong></TableCell>
                        <TableCell><strong>Description</strong></TableCell>
                        <TableCell><strong>Image</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((post) => (
                        <TableRow key={post._id}>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.description}</TableCell>
                            <TableCell>
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    style={{
                                        width: '100px',
                                        height: 'auto',
                                        borderRadius: '8px',
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div></div>
        
    );
};

export default PostForm;
