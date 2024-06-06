/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.LightbulbCircle",
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

   var pathdregular = "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm8-4a2.75 2.75 0 0 0-1.69 4.92c.2.15.35.37.4.63l.08.45h2.42l.08-.45c.05-.26.2-.48.4-.63A2.74 2.74 0 0 0 10 6Zm1.02 7H8.98l.1.6c.05.23.26.4.5.4h.84a.5.5 0 0 0 .5-.4l.1-.6ZM6.25 8.75a3.75 3.75 0 1 1 6.03 2.98l-.39 2.05A1.5 1.5 0 0 1 10.42 15h-.84a1.5 1.5 0 0 1-1.47-1.22l-.39-2.04c0-.01 0-.02-.02-.03a3.74 3.74 0 0 1-1.45-2.96Z";
   var pathdfilled = "M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM6.5 8.5a3.5 3.5 0 1 1 5.59 2.81c-.19.14-.29.29-.31.43l-.05.26H8.27l-.05-.26c-.02-.14-.12-.3-.3-.43A3.5 3.5 0 0 1 6.5 8.5Zm2.18 5.68L8.46 13h3.08l-.22 1.18a1 1 0 0 1-.98.82h-.68a1 1 0 0 1-.98-.82Z";
   
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