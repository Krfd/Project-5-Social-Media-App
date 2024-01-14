import React from "react";
import { useNavigate } from "react-router-dom";
import {
    getFirestore,
    addDoc,
    collection,
    Timestamp,
    onSnapshot,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import app from "../config/firebaseConfig";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Home() {
    let navigate = useNavigate();
    const auth = getAuth(app);
    const db = getFirestore(app);

    const [userProfile, setUserProfile] = useState("");
    const [post, setPost] = useState("");
    const [newPosts, setNewPosts] = useState([]);

    const [buttonLoading, setButtonLoading] = useState(false);

    useEffect(() => {
        // Authentication
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                setUserProfile({
                    email: user.email,
                    name: user.displayName,
                });
            } else {
                navigate("/login");
            }
        });

        // Retrieve posts
        onSnapshot(collection(db, "socials"), (snapshot) => {
            setNewPosts(snapshot.docs.map((t) => t.data()));
        });
    }, []);

    const createPost = () => {
        setButtonLoading(true);
        if (post !== "") {
            const postData = {
                body: post,
                user_email: userProfile.email,
                name: userProfile.name,
                date: Timestamp.now(),
            };

            addDoc(collection(db, "socials"), postData).then(() => {
                setPost("");
                setButtonLoading(false);
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Please fill in all fields",
            }).then(() => {
                setButtonLoading(false);
            });
        }
    };

    const logout = () => {
        signOut(auth).then(() => {
            navigate("/login");
        });
    };

    return (
        <>
            <div className="mt-5">
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <div className="col shadow p-3 rounded-3 bg-light">
                        <div className="">Home</div>
                    </div>
                    <div className="col shadow-sm p-3">
                        <div className="posts">Write your posts here...</div>
                    </div>
                    <div className="col shadow-sm p-3">
                        <div className="suggestions">
                            Write your suggestions here...
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
