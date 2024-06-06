/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.Feed",
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

   var pathdregular = "M5.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 10c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 5 10Zm.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM4 17h8.47c.65.02 1.31-.36 1.5-1.18L14.4 14h2.11c.83 0 1.5-.67 1.5-1.5V7.58c0-.98-.75-1.56-1.52-1.58H12V4.5c0-.83-.67-1.5-1.5-1.5h-7C2.67 3 2 3.67 2 4.5V15c0 1.1.9 2 2 2ZM3 4.5c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v10.98c0 .2.03.36.08.52H4a1 1 0 0 1-1-1V4.5ZM16.5 13h-1.87l1.28-5.54c.15-.64 1.09-.53 1.09.12v4.92a.5.5 0 0 1-.5.5ZM12 7h3.01a1.8 1.8 0 0 0-.07.23L13 15.6c-.14.58-1 .48-1-.12V7Z";
   var pathdfilled = "M12.47 17H4a2 2 0 0 1-2-2V4.5C2 3.67 2.67 3 3.5 3h7c.83 0 1.5.67 1.5 1.5V6h4.48c.77.02 1.52.6 1.52 1.58v4.92c0 .83-.67 1.5-1.5 1.5h-2.1l-.43 1.82c-.19.82-.85 1.2-1.5 1.18ZM15 7H12v8.48c0 .6.86.7 1 .12l1.94-8.37.07-.23ZM5.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 10c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Zm0 3.5c0 .28.22.5.5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5Z";
   
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