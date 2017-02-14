package net.nashlegend;

import java.io.File;
import java.util.ArrayList;
import java.util.HashSet;

public class Main {


    public static void main(String[] args) {
        R_React();
    }

    public static void R_React() {
        File source = new File("drawable-xhdpi");
        File dest = new File("out/d.txt");
        String prefix = getMinFather(source, dest);

        File[] files = source.listFiles();
        if (files != null) {
            for (File file : files) {
                String suffix = getSuffix(file);
                if (suffix != null) {
                    if (suffix.equalsIgnoreCase("png")
                            || suffix.equalsIgnoreCase("jpg")
                            || suffix.equalsIgnoreCase("webp")
                            || suffix.equalsIgnoreCase("gif")) {
                        String name = getScaleTrimmed(file);
                        String outUri = prefix + name;
                        System.out.println(outUri);
                    }
                }
            }
        }
    }

    public static String getSuffix(File file) {
        String fileName = file.getName();
        int pos = fileName.lastIndexOf(".");
        if (pos == fileName.length() - 1 || pos == 0 || pos < 0) {
            return null;
        } else {
            return fileName.substring(pos + 1);
        }
    }

    /**
     * 此时必然有合法后缀
     */
    public static String getScaleTrimmed(File file) {
        String fileName = file.getName();
        String suffix = getSuffix(file);
        return fileName.substring(0, fileName.lastIndexOf(".")).replaceAll("@\\dx", "") + "." + suffix;
    }

    /**
     * 此时必然有合法后缀
     */
    public static String getMinFather(File sourceFolder, File destFile) {
        String dest = destFile.getParentFile().getAbsolutePath();
        String source = sourceFolder.getAbsolutePath();
        ArrayList<File> destPath = new ArrayList<>();
        File file = destFile;
        while (file.getParentFile() != null) {
            destPath.add(0, file.getParentFile());
            file = file.getParentFile();
        }

        ArrayList<File> sourcePath = new ArrayList<>();
        file = sourceFolder;
        while (file != null) {
            sourcePath.add(0, file);
            file = file.getParentFile();
        }

        int commonLength = 0;
        int index = 0;
        while (index < sourcePath.size() && index < destPath.size()) {
            if (sourcePath.get(index).equals(destPath.get(index))) {
                commonLength++;
                index++;
            } else {
                break;
            }
        }
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < destPath.size() - commonLength; i++) {
            builder.append("..").append(File.separator);
        }
        for (int i = commonLength; i < sourcePath.size(); i++) {
            builder.append(sourcePath.get(i).getName()).append(File.separator);
        }
        return builder.toString();
    }

    public static void shrink() {

        ArrayList<File> files = new ArrayList<>();
        HashSet<String> drawables = new HashSet<>();
        File xxhdpi = new File("");

        files.add(new File("drawable-hdpi"));
        files.add(new File("drawable-mdpi"));
        files.add(new File("drawable-xhdpi"));
        files.add(new File("drawable-xxxhdpi"));
        xxhdpi = new File("drawable-xxhdpi");

        for (File file : files) {
            File[] subFiles = file.listFiles();
            for (File subFile : subFiles) {
                drawables.add(subFile.getName());
            }
        }
        for (String drawable : drawables) {
            File file = new File(xxhdpi, drawable);
            if (file.exists()) {
                for (File file1 : files) {
                    File file2 = new File(file1, drawable);
                    if (file2.exists()) {
                        file2.delete();
                    }
                }
            }
        }
    }
}
