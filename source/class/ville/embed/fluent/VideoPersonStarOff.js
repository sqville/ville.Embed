/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.VideoPersonStarOff",
{
  extend : ville.embed.fluent.Abstract,

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);

   var pathdregular = "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h5.7c-.08-.32-.15-.66-.18-1H7v-1.5c0-.28.22-.5.5-.5h1.7c.1-.35.24-.68.4-1H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 0 0 2.77 2.49v-.01l.71.71a4.5 4.5 0 0 0 6.37 6.29.5.5 0 0 0 .5-.83l-15-15ZM16.5 17.2c-.13.27-.47.4-.75.2l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h.68l3.8 3.81ZM8.57 6.45l.73.73a1.5 1.5 0 0 1 2.03 2.03l.49.49c.16-.1.32-.17.5-.25A2.5 2.5 0 0 0 10 6c-.53 0-1.02.17-1.43.45Zm3.99 3.99 1.45 1.45.01-.03a.5.5 0 0 1 .96 0l.45 1.45.08.08H17c.48 0 .68.65.3.95l-.48.36 1.74 1.74a4.5 4.5 0 0 0-6-6ZM6.12 4l1 1h9.38c.28 0 .5.22.5.5v4.1c.36.18.7.4 1 .66V5.5c0-.83-.67-1.5-1.5-1.5H6.12Z";
   var pathdfilled = "M2.85 2.15a.5.5 0 1 0-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h5.7a5.5 5.5 0 0 1 .4-4H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 0 1-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 0 0 2.77 2.49v-.01l.71.71a4.5 4.5 0 0 0 6.37 6.29.5.5 0 0 0 .5-.83l-15-15ZM16.5 17.2c-.13.27-.47.4-.75.2l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h.68l3.8 3.81ZM8.57 6.45l3.25 3.25c.16-.1.32-.17.5-.25A2.5 2.5 0 0 0 10 6c-.53 0-1.02.17-1.43.45Zm3.99 3.99 1.45 1.45.01-.03a.5.5 0 0 1 .96 0l.45 1.45.08.08H17c.48 0 .68.65.3.95l-.48.36 1.74 1.74a4.5 4.5 0 0 0-6-6ZM6.12 4l1 1h9.38c.28 0 .5.22.5.5v4.1c.36.18.7.4 1 .66V5.5c0-.83-.67-1.5-1.5-1.5H6.12Z";
   
   //prep regular
   this._htmlregular = this.svgit(this.pathit(pathdregular));
   //prep filled
   this._htmlfilled = this.svgit(this.pathit(pathdfilled));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});