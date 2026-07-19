const StatusMessages = ({ loading, error, success, as: Tag = "h5" }) => (
    <>
        <Tag className="text-warning">{loading}</Tag>
        <Tag className="text-danger">{error}</Tag>
        <Tag className="text-success">{success}</Tag>
    </>
);

export default StatusMessages;
