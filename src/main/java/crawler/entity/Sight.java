package crawler.entity;

public class Sight {
    private String sightName;
    private String zone;
    private String category;
    private String photoURL;
    private String description;
    private String address;
    private String addressURL;


    public void setSightName(String sightName){
        this.sightName = sightName;
    }

    public String getSightName(){
        return sightName;
    }

    public void setZone(String zone){
        this.zone = zone;
    }

    public String getZone(){
        return zone;
    }

    public void setCategory(String category){
        this.category = category;
    }

    public String getCategory(){
        return category;
    }

    public void setPhotoURL(String photoURL){
        this.photoURL = photoURL;
    }

    public String getPhotoURL(){
        return photoURL;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public String getDescription(){
        return description;
    }

    public void setAddress(String address){
        this.address = address;
    }

    public String getAddress(){
        return address;
    }

    public String getAddressURL() {
        return addressURL;
    }

    public void setAddressURL(String addressURL) {
        this.addressURL = addressURL;
    }

    @Override
    public String toString() {
        return "{" +
                "sightName='" + sightName + '\'' +
                ", zone='" + zone + '\'' +
                ", category='" + category + '\'' +
                ", photoURL='" + photoURL + '\'' +
                ", description='" + description + '\'' +
                ", address='" + address + '\'' +
                '}';
    }
}
